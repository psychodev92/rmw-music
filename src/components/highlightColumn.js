import React, { Component } from 'react';

class hightlightColumn extends Component {
    render() {
        return(
            <div className="overflow-hidden h-full">
                <div className="rmwHighlightBig--link relative h-full">
                    <div className="rmwHighlightBig--link_image h-full">
                        <img className="w-full h-full duration-500 ease-in scale-100 hover:scale-110" alt="BLEGH" src={this.props.image} />
                    </div>

                    <div className="rmwHighlightBig--link_text absolute bottom-0 left-0 w-full p-3">
                        <h3 className="font-bold text-md">{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default hightlightColumn;