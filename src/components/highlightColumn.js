import React, { Component } from 'react';

class hightlightColumn extends Component {
    render() {
        return(
            <div key={this.props.key} className="rmwHighlight--col overflow-hidden h-full">
                <div className="rmwHighlight--link relative h-full flex flex-col md:block">
                    {
                        this.props.options === 'small' ?
                        (
                            <div className="rmwHighlight--link_image flex-1 h-full">
                                <img className="w-full h-[200px] md:h-full object-fit object-center duration-500 ease-in scale-100 hover:scale-100 lg:hover:scale-110" alt="BLEGH" src={this.props.image} />
                            </div>
                        ) : (
                            <div className="rmwHighlight--link_image flex-1 h-full">
                                <img className="w-full h-full duration-500 ease-in scale-100 hover:scale-100 lg:hover:scale-110" alt="BLEGH" src={this.props.image} />
                            </div>
                        )
                    }

                    {
                        this.props.options === 'small' ?
                        (

                            <div className="rmwHighlight--link_text flex-1 relative md:absolute bottom-0 left-0 w-full p-0 md:p-3">
                                <h3 className="font-bold text-lg">{this.props.title}</h3>
                                <p className="text-sm">{this.props.text}</p>
                            </div>                            
                        ) : (
                            <div className="rmwHighlight--link_text flex-1 absolute bottom-0 left-0 w-full p-3">
                                <h3 className="font-bold text-lg">{this.props.title}</h3>
                                <p className="text-sm">{this.props.text}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default hightlightColumn;