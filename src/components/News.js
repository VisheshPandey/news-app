import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

	static defaultProps = {
		country: "in",
		pageSize: 6,
		category: "general"
	}

	static propTypes = {
		name: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string
	}

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: false,
			page: 1
		}
		document.title = `NewsMonkey | ${this.props.category}`
	}

	static propTypes = {}

	async updatePage() {
		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8fbd2edeb434ec89fb529497098f997&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true })
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults,
			loading: false,
			totalResults:0 
		})
		console.log(this.articles)
	}

	async componentDidMount() {
		this.updatePage();
	}

	handlePreviousClick = async () => {
		// this will decrease the value of page 
		this.setState({ page: this.state.page - 1 })
		this.updatePage();
	}

	handleNextClick = async () => {
		// this will increase the value of page 
		this.setState({ page: this.state.page + 1 })
		this.updatePage();
	}

	fetchMoreData = async () => {
		
		this.setState({
			page:this.state.page + 1 
		})

		const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e8fbd2edeb434ec89fb529497098f997&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		
		let data = await fetch(url);
		let parsedData = await data.json()
		console.log(parsedData);
		this.setState({
			articles: this.state.articles.concat(parsedData.articles),
			totalResults: parsedData.totalResults,
		})
		console.log(this.articles)


	  };


	render() {
		return (
			<div className='container my-3 bg-warning'>
				<h2>NewsMonkey Top Headlines </h2>
				{/* { this.state.loading && <Loading/> } */}

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length !== this.state.totalResults}
					loader={<Loading/>}
				>

					<div className="row">
					<div className="row">
						{this.state.articles.map((element) => {
							return <div className="col-lg-4" key={element.url}>
								<NewsItem title={element.title ? element.title.slice(0, 30) + "..." : ""} description={element.description ? element.description.slice(0, 80) + "..." : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
							</div>
						})}
					</div>

					</div>

				</InfiniteScroll>

				<div className="row text-center">
					<div className="col">
						<button disabled={this.state.page <= 1} onClick={this.handlePreviousClick} className="btn btn-primary">Previous</button>
					</div>
					<div className="col">
						<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick} className="btn btn-primary">Next </button>
					</div>
				</div>


			</div>
		)
	}
}

export default News