import { render } from "https://esm.sh/solid-js@1.8.16/web"
import { For, createSignal } from "https://esm.sh/solid-js@1.8.16/"
import h from 'https://esm.sh/solid-js@1.8.16/h'

const my_projects = [
    {
        img: '/images/redmerah-android.png',
        title: 'Android Apps',
        description: 'Several Android apps built using Flutter. Why did I choose Flutter over Kotlin/Java? Because Flutter offers simplicity and ease of use, allowing developers to communicate even in their native language.',
        url: 'https://play.google.com/store/apps/dev?id=8392660381147653639'
    },
    {
        img: '/images/redmerah-com.png',
        title: 'redmerah.com',
        description: 'My web domain connected to a blogger platform. I took the initiative to design a custom theme from scratch for my website, giving it a unique and personal touch. I have published various articles on topics I have extensively studied, particularly focusing on programming.',
        url: 'https://redmerah.com/'
    },
    {
        img: '/images/artic-template.png',
        title: 'Artic - Web Template',
        description: 'Web template for article/news/blog. This is actually a template I\'d like to sell somewhere. But because it was always rejected,it wasn\'t used until now. It is built using Next.js',
        url: 'https://artic-delta.vercel.app/'
    },
    {
        img: '/images/shutterstock-msulais.png',
        title: 'Vector Images',
        description: 'Some of my vector works that I sell on  Shutterstock. Even though the vectors are just simple, I think they\'re pretty good.',
        url: 'https://www.shutterstock.com/g/muh_sulais'
    },
    {
        img: '/images/markdown-to-html.png',
        title: 'Markdown Converter',
        description: 'Markdown converter built using React.js and Redux. This converter combines the flexibility of React.js with the powerful state management capabilities of Redux, providing users with a seamless and intuitive experience.',
        url: '/markdown-to-html'
    },
    {
        img: '/images/markdown-to-html.png',
        title: 'Color Generator',
        description: 'Generator color for dark & light mode',
        url: '/color-generator'
    },
]

const Project = (props) => h('div', { 'data-focus': () => props.selected[0]() == props.url ? '' : undefined },
    h('img', { src: () => props.img, alt: () => props.title }),
    h('section', { onClick: (e) => props.selected[1](props.url) },
        h('h2', {}, () => props.title),
        h('p', {}, () => props.description)
    ),
    h('div', { class: 'actions' },
        h('a', { class: 'btn btn-transparent', 'data-icon': '', href: () => props.url, target: '_blank', rel: 'noopener noreferrer' }, 
            h('div', { class: 'btn-layer' }, 
                h('icon', {}, '\uEB51')
            )
        ),
        h('button', { 'data-icon': '', class: 'btn btn-transparent', onClick: (e) => props.selected[1](null) }, 
            h('div', { class: 'btn-layer' }, 
                h('icon', {}, '\uE5E9')
            )
        )
    )
)

const App = () => {
    const selected = createSignal(null)

    return h(For, { each: () => my_projects },
        (v) => h(Project, {
            img: () => v.img,
            title: () => v.title,
            description: () => v.description,
            url: () => v.url, 
            selected: () => selected
        })
    )
}

render(App, document.querySelector('main > div'))