import React, { useState } from 'react';
import './Learn.css'; // Assume we have a CSS file for styling

const courses = [
  { id: 1, title: "Learn React", category: "Web Development", level: "Intermediate", description: "Master React fundamentals and build dynamic web applications.", image: "https://example.com/react.jpg" },
  { id: 2, title: "Python for Beginners", category: "Programming", level: "Beginner", description: "Start your coding journey with Python, perfect for newcomers.", image: "https://example.com/python.jpg" },
  { id: 3, title: "Data Science Fundamentals", category: "Data Science", level: "Intermediate", description: "Learn the basics of data analysis and visualization.", image: "https://example.com/data-science.jpg" },
  { id: 4, title: "JavaScript Basics", category: "Web Development", level: "Beginner", description: "Get started with JavaScript, the language of the web.", image: "https://example.com/javascript.jpg" },
  { id: 5, title: "Machine Learning", category: "Data Science", level: "Advanced", description: "Dive into machine learning algorithms and applications.", image: "https://example.com/machine-learning.jpg" },
  { id: 6, title: "Full-Stack Engineering", category: "Web Development", level: "Advanced", description: "Become a full-stack developer with this comprehensive course.", image: "https://example.com/full-stack.jpg" },
];

const Header = () => (
  <header className="learn-header">
    <div className="logo">LearnCode</div>
    </header>
);

const SearchBar = ({ onSearch }) => (
  <div className="search-bar">
    <input type="text" placeholder="What do you want to learn?" onChange={(e) => onSearch(e.target.value)} />
  </div>
);

const FilterSidebar = ({ onFilterChange }) => {
  const categories = ["All", "Web Development", "Programming", "Data Science"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  return (
    <aside className="filter-sidebar">
      <h3>Filter By:</h3>
      <div className="filter-section">
        <h4>Category</h4>
        {categories.map(category => (
          <button className="course-button" key={category} onClick={() => onFilterChange('category', category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="filter-section">
        <h4>Difficulty</h4>
        {levels.map(level => (
          <button key={level} onClick={() => onFilterChange('level', level)}>
            {level}
          </button>
        ))}
      </div>
    </aside>
  );
};

const CourseCard = ({ course }) => (
  <div className="course-card">
    <img src={course.image} alt={course.title} />
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <div className="course-info">
      <span className="category">{course.category}</span>
      <span className="level">{course.level}</span>
    </div>
  </div>
);

const CourseGrid = ({ courses }) => (
  <div className="course-grid">
    {courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

const Learn = () => {
  const [filters, setFilters] = useState({ category: 'All', level: 'All' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({ ...prevFilters, [filterType]: value }));
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCourses = courses.filter(course => 
    (filters.category === 'All' || course.category === filters.category) &&
    (filters.level === 'All' || course.level === filters.level) &&
    (course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     course.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="learn-page">
      <Header />
      <main className="learn-content">
        <SearchBar onSearch={handleSearch} />
        <div className="catalog-container">
          <FilterSidebar onFilterChange={handleFilterChange} />
          <section className="courses-section">
            <h2>Browse Our Catalog</h2>
            <CourseGrid courses={filteredCourses} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Learn;
