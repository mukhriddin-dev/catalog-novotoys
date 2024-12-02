export default function dcapconfig() {
    const config = {
        logo_url: '/cmsBanner.svg',
        backend: {
            name: 'git-gateway',
            branch: 'main',
        },
        collections: [
            {
                name: 'products',
                label: 'Products',
                folder: '/src/content/products',
                create: true,
                slug: '{{fields.name | slugify}}',
                fields: [
                    { label: 'ID', name: 'id', widget: 'string' },
                    { label: 'Name', name: 'name', widget: 'string' },
                    { label: 'Price', name: 'price', widget: 'number' },
                    {
                        label: 'Description',
                        name: 'description',
                        widget: 'markdown',
                        required: false,
                    },
                    {
                        label: 'Main Image',
                        name: 'cover',
                        widget: 'image',
                        required: true,
                    },
                    {
                        label: 'Images',
                        name: 'images',
                        widget: 'list',
                        field: {
                            label: 'Image',
                            name: 'image',
                            widget: 'image',
                        },
                        required: false,
                    },
                    {
                        label: 'Published At',
                        name: 'publishedAt',
                        widget: 'datetime',
                        required: false,
                    },
                ],
            },
        ],
        disableIdentityWidgetInjection: true,
    }
    return config
}
