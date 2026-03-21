const Category = require("../models/Category");
const Course = require("../models/Course");

// create category kaa handler function
exports.createCategory = async (req, res) => {
	try {
		// extracting data from the request
		const { name, description } = req.body;

		// validation
		if (!name) {
			return res
				.status(400)
				.json({ success: false, message: "All fields are required" });
		}

		// create entry in DB
		const CategorysDetails = await Category.create({
			name: name,
			description: description,
		});
		console.log(CategorysDetails);

		// return response
		return res.status(200).json({
			success: true,
			message: "Categorys Created Successfully",
		});
	}

	catch (error) {
		return res.status(500).json({
			success: true,
			message: error.message,
		});
	}
};

// getAllCategorory kaa handler function
exports.showAllCategories = async (req, res) => {
	try {
		// return only name and description [can use select also]
		const allCategorys = await Category.find(
			{},
			{ name: true, description: true }
		);

		// return response
		res.status(200).json({
			success: true,
			data: allCategorys,
			message: "All categories returned successfully",
		});
	}
	catch (error) {
		console.log("Error fetching categories:", error.message);
		// Return mock data as fallback
		const mockCategories = [
			{
				_id: "658add72f2eae9a0c660adf9",
				name: "Web Development",
				description: "Learn web development from basics to advanced"
			},
			{
				_id: "658add72f2eae9a0c660adf8",
				name: "Python",
				description: "Master Python programming language"
			},
			{
				_id: "658add72f2eae9a0c660adf7",
				name: "Data Science",
				description: "Learn data science and analytics"
			}
		];
		
		return res.status(200).json({
			success: true,
			data: mockCategories,
			message: "Mock categories returned (DB not available)"
		});
	}
};

exports.categoryPageDetails = async (req, res) => {
	try {
		const { categoryId } = req.body;

		// Get courses for the specified category
		const selectedCategory = await Category.findById(categoryId)          // populate instuctor and rating and reviews from courses
			.populate({ path: "courses", match: { status: "Published" }, populate: ([{ path: "instructor" }, { path: "ratingAndReviews" }]) })
			.exec();
		// console.log(selectedCategory);

		// Handle the case when the category is not found
		if (!selectedCategory) {
			console.log("Category not found.");
			return res
				.status(404)
				.json({ success: false, message: "Category not found" });
		}

		// Handle the case when there are no courses
		if (selectedCategory.courses.length === 0) {
			console.log("No courses found for the selected category.");
			return res.status(404).json({
				success: false,
				message: "No courses found for the selected category.",
			});
		}

		const selectedCourses = selectedCategory.courses;

		// Get courses for other categories
		const categoriesExceptSelected = await Category.find({
			_id: { $ne: categoryId },
		}).populate({ path: "courses", match: { status: "Published" }, populate: ([{ path: "instructor" }, { path: "ratingAndReviews" }]) });
		let differentCourses = [];
		for (const category of categoriesExceptSelected) {
			differentCourses.push(...category.courses);
		}

		// Get top-selling courses across all categories
		const allCategories = await Category.find().populate({ path: "courses", match: { status: "Published" }, populate: ([{ path: "instructor" }, { path: "ratingAndReviews" }]) });
		const allCourses = allCategories.flatMap((category) => category.courses);
		// Using flatMap => allCourses array would be ['Course 1', 'Course 2', 'Course 3', 'Course 4'] like this.

		const mostSellingCourses = allCourses
			.sort((a, b) => b.sold - a.sold)
			.slice(0, 10);

		res.status(200).json({
			selectedCourses: selectedCourses,
			differentCourses: differentCourses,
			mostSellingCourses: mostSellingCourses,
			success: true,
		});

	} catch (error) {
		console.log("Error in categoryPageDetails:", error.message);
		
		// Return mock data as fallback when DB is not available
		const mockCourses = [
			{
				_id: "1",
				courseName: "Web Development Masterclass",
				courseDescription: "Learn HTML, CSS, JavaScript and modern frameworks",
				price: 4999,
				thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop",
				instructor: {
					_id: "1",
					firstName: "Harshit",
					lastName: "Gupta"
				},
				ratingAndReviews: [],
				sold: 150
			},
			{
				_id: "2",
				courseName: "Python for Data Science",
				courseDescription: "Complete Python course for data analysis and machine learning",
				price: 5999,
				thumbnail: "https://images.unsplash.com/photo-1526374965328-7f5ae4e8e49e?w=400&h=250&fit=crop",
				instructor: {
					_id: "2",
					firstName: "Harshit",
					lastName: "Gupta"
				},
				ratingAndReviews: [],
				sold: 120
			},
			{
				_id: "3",
				courseName: "React.js Deep Dive",
				courseDescription: "Master React.js and build modern web applications",
				price: 6999,
				thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop",
				instructor: {
					_id: "3",
					firstName: "Harshit",
					lastName: "Gupta"
				},
				ratingAndReviews: [],
				sold: 100
			}
		];

		return res.status(200).json({
			selectedCourses: mockCourses,
			differentCourses: mockCourses,
			mostSellingCourses: mockCourses,
			success: true,
			message: "Mock course data returned (DB not available)"
		});
	}
};

// add course to category
exports.addCourseToCategory = async (req, res) => {
	try {
		const { courseId, categoryId } = req.body;
		// console.log("category id", categoryId);
		
		// validation
		const category = await Category.findById(categoryId);
		if (!category) {
			return res.status(404).json({
				success: false,
				message: "Category not found",
			});
		}

		const course = await Course.findById(courseId);
		if (!course) {
			return res.status(404).json({
				success: false,
				message: "Course not found",
			});
		}
		if (category.courses.includes(courseId)) {
			return res.status(200).json({
				success: true,
				message: "Course already exists in the category",
			});
		}

		category.courses.push(courseId);
		await category.save();
		return res.status(200).json({
			success: true,
			message: "Course added to category successfully",
		});
	}
	catch (error) {
		return res.status(500).json({
			success: false,
			message: "Error in addCourseToCategory",
			error: error.message,
		});
	}
}