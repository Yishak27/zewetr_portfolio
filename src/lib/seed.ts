import db from './database';
import { blogPosts } from '../data/blogPosts';

const seedDatabase = () => {
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

    // Insert tags
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
    },
    {
      name: "Amara Tadesse",
      title: "Creative Director",
      company: "Ethiopian Broadcasting Corp",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with Zewotir on our documentary series was exceptional. Her voice-over work in both English and Amharic brought our stories to life with authenticity and emotional depth."
    },
    {
      name: "James Rodriguez",
      title: "CEO",
      company: "Impact Communications",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Zewotir's PR strategy during our product launch was masterful. Her media relationships and strategic thinking resulted in coverage that exceeded our goals by 300%. Highly recommended."
    },
    {
      name: "Hanan Mohammed",
      title: "Event Coordinator",
      company: "Cultural Heritage Foundation",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "For our international cultural exchange program, Zewotir's hosting skills were perfect. She connected with audiences across different backgrounds and made everyone feel included."
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
    },
    {
      title: "ማን ያሸንፋል",
      category: "media",
      description: "እኔ ራፕ ሳደርግ ቱፓክ ከሞት ይነሳል ",
      image: "/api/placeholder/600/400",
      videoUrl: "https://www.youtube.com/watch?v=lsurjcL-leo",
      type: "video"
    },
    {
      title: "ማን ያሸንፋል",
      category: "media",
      description: "በጉዲፈቻ አሜሪካ ሄደው ወደ ሀገራቸው የተመለሱት ኢትዮጵያዊያን  ልዩ ፕሮግራም በእንግሊዝኛ",
      image: "/api/placeholder/600/400",
      videoUrl: "https://www.youtube.com/watch?v=f7VKpUrz8Oo",
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

  // Seed social links
  const insertSocialLink = db.prepare(`
    INSERT INTO social_links (platform, url, icon, is_active)
    VALUES (?, ?, ?, ?)
  `);

  const socialLinks = [
    { platform: "LinkedIn", url: "https://linkedin.com/in/zewotir", icon: "linkedin", is_active: true },
    { platform: "Twitter", url: "https://twitter.com/zewotir", icon: "twitter", is_active: true },
    { platform: "Instagram", url: "https://instagram.com/zewotir", icon: "instagram", is_active: true },
    { platform: "YouTube", url: "https://youtube.com/@zewotir", icon: "youtube", is_active: true }
  ];

  socialLinks.forEach(link => {
    insertSocialLink.run(link.platform, link.url, link.icon, link.is_active);
  });

  // Seed services
  const insertService = db.prepare(`
    INSERT INTO services (title, description, icon, features)
    VALUES (?, ?, ?, ?)
  `);

  const services = [
    {
      title: "Strategic Communication",
      description: "Comprehensive PR strategies that build brand reputation and drive meaningful engagement across all channels.",
      icon: "megaphone",
      features: JSON.stringify([
        "Crisis Communication Management",
        "Brand Messaging & Positioning",
        "Media Relations Strategy",
        "Cross-Cultural Communication",
        "Stakeholder Engagement"
      ])
    },
    {
      title: "Media Hosting & Presentation",
      description: "Professional hosting services for events, broadcasts, and digital content with bilingual capabilities.",
      icon: "mic",
      features: JSON.stringify([
        "Television & Radio Hosting",
        "Corporate Event MC Services",
        "Podcast & Digital Content",
        "Bilingual Presentations",
        "Interview Facilitation"
      ])
    },
    {
      title: "Voice-Over Artistry",
      description: "Compelling voice-over services in English and Amharic for commercials, documentaries, and corporate content.",
      icon: "volume-2",
      features: JSON.stringify([
        "Commercial Voice-Overs",
        "Documentary Narration",
        "Corporate Training Videos",
        "Audiobook Recording",
        "Multilingual Services"
      ])
    }
  ];

  services.forEach(service => {
    insertService.run(service.title, service.description, service.icon, service.features);
  });

  console.log('Database seeded successfully!');
};

export default seedDatabase;