import React, { Component } from 'react';

class hightlightColumn extends Component {
    render() {
        return(
            <div className="rmwHighlight--col overflow-hidden h-full">
                <div className="rmwHighlight--link relative h-full">
                    <div className="rmwHighlight--link_image h-full">
                        <img className="w-full h-full duration-500 ease-in scale-100 hover:scale-110" alt="BLEGH" src={this.props.image} />
                    </div>

                    <div className="rmwHighlight--link_text absolute bottom-0 left-0 w-full p-3">
                        <h3 className="font-bold text-lg md:text-md">{this.props.title}</h3>
                        <p className="text-sm">{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default hightlightColumn;