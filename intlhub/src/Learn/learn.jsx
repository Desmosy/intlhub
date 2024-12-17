import React, { useState } from 'react';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import './Learn.css'; // Assume we have a CSS file for styling

const courses = [
  {
    id: 1,
    title: "Learn React",
    category: "Web Development",
    level: "Intermediate",
    description: "Master React fundamentals and build dynamic web applications.",
    image: "https://example.com/react.jpg",
    checklist: [
      {
        title: "Introduction to State",
        resources: [
          { name: "React State Documentation", url: "https://reactjs.org/docs/state-and-lifecycle.html" },
          { name: "State Tutorial", url: "https://www.w3schools.com/react/react_state.asp" }
        ]
      },
      {
        title: "Components and Props",
        resources: [
          { name: "React Components", url: "https://reactjs.org/docs/components-and-props.html" },
          { name: "Props Tutorial", url: "https://www.w3schools.com/react/react_props.asp" }
        ]
      }
      // Add more checklist items as needed
    ]
  },
  // Add similar structure for other courses
];

const CourseDetail = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [openItems, setOpenItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  if (!course) return <div>Course not found</div>;

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleCheck = (index) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Course Checklist</h3>
      <ul className="checklist">
        {course.checklist.map((item, index) => (
          <li key={index} className={`checklist-item ${checkedItems[index] ? 'completed' : ''}`}>
            <div onClick={() => toggleItem(index)}>
              <input 
                type="checkbox" 
                checked={checkedItems[index] || false} 
                onChange={() => handleCheck(index)} 
              />
              {item.title}
              <span>{openItems[index] ? '▲' : '▼'}</span>
            </div>
            {openItems[index] && (
              <ul className="resources">
                {item.resources.map((resource, resIndex) => (
                  <li key={resIndex}>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <Link to=".." className="back-button">Back to Courses</Link>
    </div>
  );
};

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
  <Link to={`course/${course.id}`} className="course-card">    <img src={course.image} alt={course.title} />
    <h3>{course.title}</h3>
    <p>{course.description}</p>
    <div className="course-info">
      <span className="category">{course.category}</span>
      <span className="level">{course.level}</span>
    </div>
  </Link>
);

const CourseGrid = ({ courses }) => (
  <div className="course-grid">
    {courses.map(course => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);

const CourseChecklist = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) return <div>Course not found</div>;

  // This is a mock checklist. In a real app, you'd fetch this data from an API
  const checklist = [
    "Introduction to the course",
    "Setting up your development environment",
    "Basic concepts and syntax",
    "Building your first project",
    "Advanced topics",
    "Final project and course wrap-up"
  ];

  return (
    <div className="course-checklist">
      <h2>{course.title} Checklist</h2>
      <ul>
        {checklist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link to=".." className="back-button">Back to Courses</Link>    </div>
  );
};

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
          <Routes>
            <Route index element={
              <section className="courses-section">
                <h2>Browse Our Catalog</h2>
                <CourseGrid courses={filteredCourses} />
              </section>
            } />
            <Route path="course/:id" element={<CourseDetail courses={courses} />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}


export default Learn;
