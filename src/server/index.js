import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class Index extends Component {
    exampleMethod() {
        console.log(this.props);
    };
    head() {
        return (
            <Helmet
                title="Page title"
                meta={[
                    { "name": "description", "content": "Description of page" },
                    { "name": "keyword", "content": "Description of page" },
                    { property: "og:type", content: "article" },
                    { property: "og:title", content: "Example title" },
                    { property: "og:image", content: "http://example.com/article.jpg" },
                    { property: "og:url", content: "http://example.com/example" }
                ]}
            />
        );
    };

    render() {
        return (<div>
            {this.head()}
            <h1>My Home Page1</h1>
            <p>Some content</p>
            <button onClick={() => { this.exampleMethod() }}>Click here for console</button>
        </div>);
    }
}

export default Index;