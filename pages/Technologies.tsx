
import React from 'react';

const Technologies: React.FC = () => {
  const techCategories = [
    {
      name: 'Frontend',
      items: [
        { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' },
        { name: 'Vue.js', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
        { name: 'SwiftUI', icon: 'https://cdn.simpleicons.org/swift/F05138' },
      ]
    },
    {
      name: 'Backend',
      items: [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'Java', icon: 'https://cdn.simpleicons.org/openjdk/007396' },
        { name: '.NET', icon: 'https://cdn.simpleicons.org/dotnet/512BD4' },
        { name: 'Go', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
      ]
    },
    {
      name: 'Cloud & DevOps',
      items: [
        { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/232F3E' },
        { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0078D4' },
        { name: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
        { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
      ]
    },
    {
      name: 'Database',
      items: [
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/47A248' },
        { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/DC382D' },
        { name: 'Oracle', icon: 'https://cdn.simpleicons.org/oracle/F80000' },
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-white py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
            Future-Proof <span className="text-blue-600">Technologies</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
            We leverage the most advanced and stable technical stacks to build enterprise-grade solutions that scale.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {techCategories.map((cat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-50">{cat.name}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {cat.items.map((tech, techIdx) => (
                    <div key={techIdx} className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all" />
                      <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
