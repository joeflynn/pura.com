/*
  Page
  <Page/>
*/
import React from 'react';

var Page = React.createClass({

    render: function () {
        var details = this.props.data;

        return (
            <div>
                <h1 className="page-title">
                    {details.title.rendered}
                </h1>
                <div className="entry-content" dangerouslySetInnerHTML={{__html: details.content.rendered}} />
            </div>
        )
    }
});

export default Page;
