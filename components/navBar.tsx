import { A, Comp, Div, Span } from '@raber/react';
import { useRouter } from 'next/router';
import React from 'react';

export interface NavItem {
    name: string;
    link: string;
}

type Props = {
    navItems: NavItem[];
} & React.ComponentProps<"div">

export const DocsItems: readonly NavItem[] = [{
    name: 'Product',
    link: 'product'
}, {
    name: 'Service',
    link: 'service'
},
{
    name: 'Promotions',
    link: 'promotions'
},
{
    name: 'Events',
    link: 'events'
},
{
    name: 'Contact Us',
    link: 'contact-us'
},
{
    name: 'About Us',
    link: 'about-us'
},
{
    name: 'Blog',
    link: 'blog'
}
] as const;

export const DocsNavBar = Comp((props: React.ComponentProps<"div">) => {
    return <Sidebar {...props} navItems={DocsItems.map(n => {
        return {
            name: n.name,
            link: `/${n.link}`
        }
    })} />
}, {
    name: 'DocsNavBar',
    category: 'Raber'
})

export const Sidebar: React.FC<Props> = ({
    navItems,
    ...rest
}) => {

    const router = useRouter();

    return (
        <Div vKey="nav" className="flex w-64 px-4 text-gray-700"  {...rest as any}>
                {navItems.map((item) => (
                    <A vKey="navItem"
                        key={item.name}
                        href={item.link}
                        className={`flex items-center p-2 rounded-lg hover:bg-slate-100 active:bg-slate-200 ${router.asPath === item.link ? 'bg-slate-100' : ''
                            }`}
                    >
                        <Span vKey="navItemName">{item.name}</Span>
                    </A>
                ))}
        </Div>
    );
};