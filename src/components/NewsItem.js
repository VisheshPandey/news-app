import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {

    static propTypes = {}

    render() {
        let {title , description , imageUrl , newsUrl} = this.props ;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://www.reuters.com/resizer/Bin1vbWt-0gsoGJdgM_MYrS44KY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/X2Z7L7WIBRPCVPIVCQAQ6NSUBI.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">
                            Read More 
                        </a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem