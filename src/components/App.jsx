import { Component } from 'react';
import { fetchPhoto } from './api';
import { SearchBar } from './SearchBar/SearchBar';
import { Gallery } from './Gallery/Gallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchValue = form.elements.query.value;
    this.setState({
      query: searchValue,
    });
    // Сохраняем термин поиска (query)

    // Сбрасываем page в 1
    // Очистить массив картинок
  };

  handleLoadMore = () => {
    this.setState(prevState => prevState.page + 1);
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.query !== this.state.query) {
        const search = await fetchPhoto(this.state.query, this.state.page);
        console.log(search);
        this.setState(
          (prevState = {
            images: [...prevState.images, search],
          })
        );
      }
    } catch (error) {
      // this.setState({ error: true });
    } finally {
      // this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />

        {this.state.images.length > 0 && <Gallery items = {this.state.images}/>} 
        {/* {this.state.images.length > 0 && <div>GALLERY</div>}
        {this.state.loading && <div>Loader...</div>}
        <button onClick={this.handleLoadMore}>Load more</button> */}
      </div>
    );
  }
}
