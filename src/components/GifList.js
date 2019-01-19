import React from 'react'

const GifList = ({gifs}) => {
  return(
    <div>
      <ul>
        {{gifs}.map(gif => <li><img key={gif.id} src={gif.url} alt="gif" /></li>)}
      </ul>
    </div>
  )

}

export default GifList

/*export default class GifList extends Component {

  render(){
    return(
      <div>
        <ul>
          {this.props.gifs.map(gif => <li><img key={gif.url} src={gif.url} alt="gif"/></li>)}
        </ul>
      </div>
    )
  }
}
*/
