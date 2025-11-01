import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, '..', 'portfolio.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Create tables
const createTables = () => {
  // Blog posts table
  db.exec(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      date TEXT NOT NULL,
      read_time TEXT NOT NULL,
      category TEXT NOT NULL,
      image TEXT NOT NULL,
      slug TEXT UNIQUE NOT NULL,
      author_name TEXT NOT NULL,
      author_image TEXT NOT NULL,
      author_bio TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Blog tags table
  db.exec(`
    CREATE TABLE IF NOT EXISTS blog_tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      blog_post_id INTEGER NOT NULL,
      tag TEXT NOT NULL,
      FOREIGN KEY (blog_post_id) REFERENCES blog_posts (id) ON DELETE CASCADE
    )
  `);

  // Gallery items table
  db.exec(`
    CREATE TABLE IF NOT EXISTS gallery_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      category TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Testimonials table
  db.exec(`
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      title TEXT NOT NULL,
      company TEXT NOT NULL,
      image TEXT NOT NULL,
      rating INTEGER DEFAULT 5,
      text TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Portfolio items table
  db.exec(`
    CREATE TABLE IF NOT EXISTS portfolio_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL,
      image TEXT NOT NULL,
      video_url TEXT,
      audio_url TEXT,
      link TEXT,
      type TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Client logos table
  db.exec(`
    CREATE TABLE IF NOT EXISTS client_logos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      logo TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Social links table
  db.exec(`
    CREATE TABLE IF NOT EXISTS social_links (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      platform TEXT NOT NULL,
      url TEXT NOT NULL,
      icon TEXT NOT NULL,
      is_active BOOLEAN DEFAULT 1,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Services table
  db.exec(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      icon TEXT NOT NULL,
      features TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
};

const seedDatabase = () => {
  console.log('Creating tables...');
  createTables();

  console.log('Seeding database...');

  // Clear existing data
  db.exec('DELETE FROM blog_tags');
  db.exec('DELETE FROM blog_posts');
  db.exec('DELETE FROM gallery_items');
  db.exec('DELETE FROM testimonials');
  db.exec('DELETE FROM portfolio_items');
  db.exec('DELETE FROM client_logos');
  db.exec('DELETE FROM social_links');
  db.exec('DELETE FROM services');

  // Blog posts data
  const blogPosts = [
    {
      title: "The Art of Strategic Communication in Crisis Management",
      excerpt: "In today's fast-paced digital world, how organizations communicate during challenging times can make or break their reputation. Here's what I've learned from years of crisis communication...",
      content: `<p>In today's fast-paced digital world, how organizations communicate during challenging times can make or break their reputation. Having navigated numerous crisis situations throughout my career, I've learned that effective crisis communication isn't just about damage control—it's about maintaining trust, demonstrating leadership, and emerging stronger.</p>

<h2>The Foundation of Crisis Communication</h2>
<p>Crisis communication begins long before any crisis occurs. It starts with building authentic relationships with your stakeholders, establishing clear communication channels, and developing a comprehensive crisis communication plan that can be activated at a moment's notice.</p>

<p>During my years working with international organizations, I've seen how cultural sensitivity plays a crucial role in crisis communication. What works in one market may not resonate in another, and understanding these nuances can mean the difference between resolution and escalation.</p>

<h2>Key Principles I Follow</h2>
<ul>
<li><strong>Speed with Accuracy:</strong> In the digital age, silence is often interpreted as guilt. However, rushing to respond without facts can be equally damaging.</li>
<li><strong>Transparency:</strong> Honest communication, even when the news is bad, builds more trust than carefully crafted deflections.</li>
<li><strong>Consistency:</strong> All stakeholders should receive consistent messaging across all channels.</li>
<li><strong>Empathy:</strong> Acknowledging the impact on affected parties shows humanity and responsibility.</li>
</ul>

<h2>The Bilingual Advantage</h2>
<p>Working in both English and Amharic has taught me that crisis communication isn't just about translation—it's about cultural translation. The same message may need to be framed differently for different audiences while maintaining its core truth.</p>

<p>I've helped organizations navigate crises that spanned multiple countries and cultures, ensuring that their response was not only factually accurate but culturally appropriate and emotionally resonant.</p>

<h2>Moving Forward</h2>
<p>Crisis communication is ultimately about human connection. In our increasingly connected world, the organizations that thrive are those that communicate with authenticity, cultural intelligence, and genuine care for their stakeholders.</p>

<p>Whether you're a startup or a multinational corporation, the principles remain the same: be prepared, be honest, be culturally aware, and always remember that behind every stakeholder is a human being deserving of respect and clear communication.</p>`,
      date: "2024-01-15",
      readTime: "5 min read",
      category: "PR Strategy",
      image: "/api/placeholder/600/400",
      slug: "strategic-communication-crisis-management",
      author: {
        name: "Zewotir Desalegn Alemu",
        image: "/hero-portrait.jpg",
        bio: "PR Strategist, Media Personality, and Voice-Over Artist with 15+ years of international experience."
      },
      tags: ["Crisis Communication", "PR Strategy", "Cross-Cultural Communication", "Leadership"]
    }
    // Add more blog posts here if needed
  ];

  // Seed blog posts
  const insertBlogPost = db.prepare(`
    INSERT INTO blog_posts (title, excerpt, content, date, read_time, category, image, slug, author_name, author_image, author_bio)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const insertBlogTag = db.prepare(`
    INSERT INTO blog_tags (blog_post_id, tag)
    VALUES (?, ?)
  `);

  blogPosts.forEach(post => {
    const result = insertBlogPost.run(
      post.title,
      post.excerpt,
      post.content,
      post.date,
      post.readTime,
      post.category,
      post.image,
      post.slug,
      post.author.name,
      post.author.image,
      post.author.bio
    );

    post.tags.forEach(tag => {
      insertBlogTag.run(result.lastInsertRowid, tag);
    });
  });

  // Seed gallery items
  const insertGalleryItem = db.prepare(`
    INSERT INTO gallery_items (title, description, image, category)
    VALUES (?, ?, ?, ?)
  `);

  const galleryItems = [
    {
      title: "Portrait Study",
      description: "A contemplative portrait exploring light and shadow",
      image: "/vercel.svg",
      category: "portraits"
    },
    {
      title: "Urban Landscape",
      description: "City life captured in charcoal and graphite",
      image: "/api/placeholder/500/400",
      category: "landscapes"
    },
    {
      title: "Cultural Heritage",
      description: "Traditional Ethiopian motifs and patterns",
      image: "/api/placeholder/400/600",
      category: "cultural"
    },
    {
      title: "Abstract Expression",
      description: "Emotional interpretation through abstract forms",
      image: "/api/placeholder/600/400",
      category: "abstract"
    }
  ];

  galleryItems.forEach(item => {
    insertGalleryItem.run(item.title, item.description, item.image, item.category);
  });

  // Seed testimonials
  const insertTestimonial = db.prepare(`
    INSERT INTO testimonials (name, title, company, image, rating, text)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Marketing Director",
      company: "Global Tech Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Zewotir's strategic communication expertise transformed our crisis response. Her bilingual capabilities and cultural sensitivity were invaluable for our international campaigns. The results exceeded our expectations."
    },
    {
      name: "Dr. Michael Chen",
      title: "Conference Organizer",
      company: "International Business Summit",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "As our MC for three consecutive years, Zewotir brings unmatched professionalism and energy. Her ability to engage diverse audiences and seamlessly manage complex event flows is remarkable."
    }
  ];

  testimonials.forEach(testimonial => {
    insertTestimonial.run(
      testimonial.name,
      testimonial.title,
      testimonial.company,
      testimonial.image,
      testimonial.rating,
      testimonial.text
    );
  });

  // Seed portfolio items
  const insertPortfolioItem = db.prepare(`
    INSERT INTO portfolio_items (title, category, description, image, video_url, type)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  const portfolioItems = [
    {
      title: "ማን ያሸንፋል",
      category: "media",
      description: "ተበላው! ዩክሬንን ካላወቅሽ እኔንም አታውቂኝም",
      image: "/api/placeholder/600/400",
      videoUrl: "https://www.youtube.com/watch?v=vxoTILFKix0",
      type: "video"
    }
  ];

  portfolioItems.forEach(item => {
    insertPortfolioItem.run(
      item.title,
      item.category,
      item.description,
      item.image,
      item.videoUrl,
      item.type
    );
  });

  // Seed client logos
  const insertClientLogo = db.prepare(`
    INSERT INTO client_logos (name, logo)
    VALUES (?, ?)
  `);

  const clientLogos = [
    { name: "Ethiopian Broadcasting Corporation", logo: "/logos/ebc.png" },
    { name: "Ethiopian Broadcasting Service", logo: "/logos/ebs.png" }
  ];

  clientLogos.forEach(client => {
    insertClientLogo.run(client.name, client.logo);
  });

  console.log('Database seeded successfully!');
};

seedDatabase();
db.close();