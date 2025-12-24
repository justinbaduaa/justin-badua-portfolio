export default function sitemap() {
    const baseUrl = 'https://justinbadua.ca';

    // Static routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // Project routes
    const projects = [
        'tricode',
        'nexridge',
        'micra',
        'numnum',
        'rl-rocket-league',
        'crakd',
        'cucai',
    ];

    const projectRoutes = projects.map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    return [...staticRoutes, ...projectRoutes];
}
