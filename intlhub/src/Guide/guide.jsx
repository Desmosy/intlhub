import React, { useState, useEffect } from 'react';
import { BookOpen, Laptop, GraduationCap, Users, Brain, Search, Clock, Bookmark, TrendingUp, MessageSquare, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import guidesData from './guides.json';
// import { useNavigate } from 'react-router-dom';
import './guide.css';

const GuideHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFormat, setSelectedFormat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedGuides, setDisplayedGuides] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const guidesPerPage = 6;

//   const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Guides', icon: BookOpen },
    { id: 'technical', label: 'Technical', icon: Laptop },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'soft-skills', label: 'Soft Skills', icon: Users },
    { id: 'life-skills', label: 'Life Skills', icon: Brain }
  ];

  const formats = [
    { id: 'all', label: 'All Formats' },
    { id: 'structured', label: 'Structured Guides' },
    { id: 'interactive', label: 'Interactive Learning' },
    { id: 'hands-on', label: 'Hands-on Practice' }
  ];

  const getCategoryIcon = (category) => {
    const found = categories.find(cat => cat.id === category);
    return found ? found.icon : BookOpen;
  };

  const getFormatBadgeColor = (format) => {
    switch(format) {
      case 'structured': return 'bg-blue-100 text-blue-600';
      case 'interactive': return 'bg-purple-100 text-purple-600';
      case 'hands-on': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const filtered = filteredGuides();
    setDisplayedGuides(filtered.slice((pageNumber - 1) * guidesPerPage, pageNumber * guidesPerPage));
  };

  const filteredGuides = () => {
    return guidesData.filter(guide => 
      (selectedCategory === 'all' || guide.category === selectedCategory) &&
      (selectedFormat === 'all' || guide.format === selectedFormat) &&
      (guide.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
       guide.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
    );
  };

  useEffect(() => {
    const filtered = filteredGuides();
    paginate(1); // Start with page 1
    setHasMore(filtered.length > guidesPerPage);
  }, [selectedCategory, selectedFormat, searchQuery]);

  return (
    <div className="guides-container">
      {/* Header Section */}
      <div className="header">
        <h1>Universal Guide Hub</h1>
        <p>Discover guides across technical, academic, and life skills</p>
        {/* <button onClick={() => navigate('/')} className="go-home-button">
          Go Back to Home
        </button> */}
      </div>

      {/* Search and Filters */}
      <div className="filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search guides by title or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="search-icon" size={20} />
        </div>
        <div className="button-group">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`button ${selectedCategory === category.id ? 'active' : ''}`}
            >
              <category.icon size={18} />
              {category.label}
            </button>
          ))}
        </div>
        <div className="button-group">
          {formats.map(format => (
            <button
              key={format.id}
              onClick={() => setSelectedFormat(format.id)}
              className={`button ${selectedFormat === format.id ? 'active' : ''}`}
            >
              {format.label}
            </button>
          ))}
        </div>
      </div>

      {/* Guides Grid */}
      <div className="guide-cards">
        {displayedGuides.map(guide => (
          <div key={guide.id} className="guide-card">
            <div className="card-header">
              {React.createElement(getCategoryIcon(guide.category), { className: 'category-icon', size: 24 })}
              <div className={`format-badge ${getFormatBadgeColor(guide.format)}`}>
                {guide.format}
              </div>
            </div>
            <h2>{guide.title}</h2>
            <p className="description">{guide.description}</p>

            {/* Metadata */}
            <div className="metadata">
              <div className="metadata-item">
                <Clock size={16} /> {guide.readTime}
              </div>
              <div className="metadata-item">
                <Calendar size={16} /> Updated: {guide.lastUpdated}
              </div>
              <div className="metadata-item">
                <TrendingUp size={16} /> {guide.popularity}% found helpful
              </div>
            </div>

            {/* Tags */}
            <div className="tags">
              {guide.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Contents Preview */}
            <div className="contents-preview">
              <h4>Guide Contents:</h4>
              <ul>
                {guide.contents.map((content, index) => (
                  <li key={index} className="content-item">
                    <div className="bullet-point"></div>
                    {content}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resource Types */}
            <div className="resource-types">
              {guide.resourceType.map((type, index) => (
                <span key={index} className="resource-type">
                  {type}
                </span>
              ))}
            </div>

            {/* Author and Actions */}
            <div className="actions">
              <div className="author">
                By {guide.author}
              </div>
              <div className="action-buttons">
                <button className="action-button">
                  <Bookmark size={18} className="action-icon" />
                </button>
                <button className="action-button">
                  <MessageSquare size={18} className="action-icon" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
          className="pagination-button"
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        <span className="page-info">
          Page {currentPage} of {Math.ceil(filteredGuides().length / guidesPerPage)}
        </span>
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === Math.ceil(filteredGuides().length / guidesPerPage)}
          className="pagination-button"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default GuideHub;
