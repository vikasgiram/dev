import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TechnicalBlogFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'security', name: 'Security', count: 8 },
    { id: 'react', name: 'React', count: 6 },
    { id: 'nodejs', name: 'Node.js', count: 5 },
    { id: 'devops', name: 'DevOps', count: 5 }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Implementing Zero-Trust Architecture in MERN Applications",
      excerpt: "A comprehensive guide to building security-first MERN stack applications with zero-trust principles, JWT implementation, and advanced authentication strategies.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop",
      category: "security",
      readTime: "8 min read",
      publishedAt: "2024-01-15",
      engagement: { views: "2.4K", likes: 156, comments: 23 },
      tags: ["Security", "MERN", "JWT", "Authentication"],
      platform: "Medium"
    },
    {
      id: 2,
      title: "React 18 Performance Optimization: Advanced Techniques",
      excerpt: "Deep dive into React 18's concurrent features, Suspense boundaries, and performance optimization techniques that can boost your app's performance by 40%.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "react",
      readTime: "12 min read",
      publishedAt: "2024-01-10",
      engagement: { views: "3.1K", likes: 203, comments: 31 },
      tags: ["React", "Performance", "Optimization", "Concurrent"],
      platform: "Dev.to"
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js and MongoDB",
      excerpt: "Learn how to design and implement scalable REST APIs using Node.js, Express, and MongoDB with proper error handling, caching, and security measures.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
      category: "nodejs",
      readTime: "10 min read",
      publishedAt: "2024-01-05",
      engagement: { views: "1.8K", likes: 124, comments: 18 },
      tags: ["Node.js", "MongoDB", "API", "Scalability"],
      platform: "Medium"
    },
    {
      id: 4,
      title: "Docker & Kubernetes for MERN Stack Deployment",
      excerpt: "Complete guide to containerizing MERN applications with Docker and orchestrating them with Kubernetes for production-ready deployments.",
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
      category: "devops",
      readTime: "15 min read",
      publishedAt: "2023-12-28",
      engagement: { views: "2.7K", likes: 189, comments: 27 },
      tags: ["Docker", "Kubernetes", "DevOps", "Deployment"],
      platform: "Dev.to"
    },
    {
      id: 5,
      title: "Advanced MongoDB Aggregation Pipelines",
      excerpt: "Master complex data transformations and analytics with MongoDB aggregation pipelines, including real-world examples and performance tips.",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
      category: "nodejs",
      readTime: "11 min read",
      publishedAt: "2023-12-20",
      engagement: { views: "1.5K", likes: 98, comments: 14 },
      tags: ["MongoDB", "Aggregation", "Database", "Analytics"],
      platform: "Medium"
    },
    {
      id: 6,
      title: "Securing React Applications: Best Practices 2024",
      excerpt: "Essential security practices for React applications including XSS prevention, secure authentication, and content security policies.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
      category: "security",
      readTime: "9 min read",
      publishedAt: "2023-12-15",
      engagement: { views: "2.9K", likes: 234, comments: 42 },
      tags: ["React", "Security", "XSS", "Authentication"],
      platform: "Dev.to"
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-accent font-mono text-sm mb-4">
            <Icon name="BookOpen" size={16} />
            <span>Technical Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
            Latest from the Blog
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Deep technical insights, tutorials, and industry analysis from the trenches of full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                selectedCategory === category.id
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-background text-text-secondary hover:bg-accent/10 hover:text-accent border border-border'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-background border border-border rounded-xl overflow-hidden shadow-primary hover:shadow-secondary transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Platform Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-primary rounded-full">
                    {post.platform}
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-accent/90 backdrop-blur-sm text-xs font-medium text-accent-foreground rounded-full capitalize">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-text-muted mb-3">
                  <span>{formatDate(post.publishedAt)}</span>
                  <span className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg font-heading font-semibold text-primary mb-3 line-clamp-2 group-hover:text-accent transition-smooth">
                  {post.title}
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface text-xs text-text-muted rounded border"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-surface text-xs text-text-muted rounded border">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Engagement Metrics */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-xs text-text-muted">
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={12} />
                      <span>{post.engagement.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={12} />
                      <span>{post.engagement.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={12} />
                      <span>{post.engagement.comments}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="xs"
                    iconName="ArrowRight"
                    iconPosition="right"
                    className="text-xs"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Blog CTA */}
        <div className="text-center">
          <div className="bg-background border border-border rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Icon name="Rss" size={24} className="text-accent" />
              </div>
            </div>
            <h3 className="text-xl font-heading font-semibold text-primary mb-2">
              Stay Updated with Latest Insights
            </h3>
            <p className="text-text-secondary mb-6">
              Get weekly technical articles, tutorials, and industry insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button
                variant="primary"
                iconName="Send"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalBlogFeed;