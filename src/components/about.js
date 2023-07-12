import React from 'react'
import { useTheme } from './ThemeContext'
import { Image } from './image'
export default function About() {

    const darkTheme = useTheme()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem',
    }
    return (
        <main className="about-cnt" style={themeStyles}>
            <h1>About</h1>
            <article>
                <section className="img-cnt">
                    <Image url="https://plus.unsplash.com/premium_photo-1661382022096-d652c06cf1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    />
                </section>
                <section className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit venenatis velit. Quisque pulvinar aliquam mauris, non venenatis arcu congue id. Sed at odio porta, maximus diam ut, volutpat nibh. Sed sed neque in mauris iaculis dignissim ut non tortor. Suspendisse enim felis, mollis ac quam et, egestas commodo metus. Proin tincidunt dolor et cursus rhoncus. Duis mi magna, molestie eu efficitur in, finibus sit amet elit. Sed ut augue vulputate, porta sem vitae, molestie felis. Ut accumsan porta turpis elementum accumsan. Pellentesque laoreet erat ac sapien eleifend tristique. Aenean eros est, tincidunt sed fermentum sed, lacinia eu nisi.
                    </p>
                </section>
            </article>
            <article>
                <section className="img-cnt">
                    <Image url="https://plus.unsplash.com/premium_photo-1661382022096-d652c06cf1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    />
                </section>
                <section className="about-text-left">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit venenatis velit. Quisque pulvinar aliquam mauris, non venenatis arcu congue id. Sed at odio porta, maximus diam ut, volutpat nibh. Sed sed neque in mauris iaculis dignissim ut non tortor. Suspendisse enim felis, mollis ac quam et, egestas commodo metus. Proin tincidunt dolor et cursus rhoncus. Duis mi magna, molestie eu efficitur in, finibus sit amet elit. Sed ut augue vulputate, porta sem vitae, molestie felis. Ut accumsan porta turpis elementum accumsan. Pellentesque laoreet erat ac sapien eleifend tristique. Aenean eros est, tincidunt sed fermentum sed, lacinia eu nisi.
                    </p>
                </section>
            </article>
            <article>
                <section className="img-cnt">
                    <Image url="https://plus.unsplash.com/premium_photo-1661382022096-d652c06cf1be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    />
                </section>
                <section className="about-text">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit venenatis velit. Quisque pulvinar aliquam mauris, non venenatis arcu congue id. Sed at odio porta, maximus diam ut, volutpat nibh. Sed sed neque in mauris iaculis dignissim ut non tortor. Suspendisse enim felis, mollis ac quam et, egestas commodo metus. Proin tincidunt dolor et cursus rhoncus. Duis mi magna, molestie eu efficitur in, finibus sit amet elit. Sed ut augue vulputate, porta sem vitae, molestie felis. Ut accumsan porta turpis elementum accumsan. Pellentesque laoreet erat ac sapien eleifend tristique. Aenean eros est, tincidunt sed fermentum sed, lacinia eu nisi.
                    </p>
                </section>
            </article>
        </main>
    )
}
