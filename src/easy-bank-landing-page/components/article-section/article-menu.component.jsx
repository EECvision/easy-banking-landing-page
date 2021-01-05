import React,{useState} from 'react';
import ArticleData from './article-data.json';
import ArticleItem from './article-item.component';

const ArticleMenu =()=>{

    const [data] = useState(ArticleData);

    return (
        <div className="w-full bg-gray-100 px-6 md:px-32 py-16">
            <h1 className="text-center lg:text-left text-blue-900 text-4xl mb-8">Latest Articles</h1>
            <div className="flex justify-evenly lg:justify-between items-center flex-wrap">
                {
                    data.map(({id,...otherProps})=>(
                        <ArticleItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        </div>
    )
}

export default ArticleMenu;
