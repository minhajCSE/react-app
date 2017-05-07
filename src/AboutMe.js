import React, { Component } from 'react';

class AboutMe extends Component{

    render(){
        let created_at = this.props.aboutMe.created_at,
            year = (new Date(created_at)).getFullYear(),
            month = (new Date(created_at)).getMonth()+1,
            day = (new Date(created_at)).getDate();
        return(
            <div>
                <div className="well well-sm">
                    <div className="row">
                        <div className="col-sm-8 col-md-6">
                            <img src={this.props.aboutMe.avatar_url} alt="" className="img-rounded img-responsive" />
                        </div>
                        <div className="col-sm-4 col-md-6">
                            <h4>
                                {this.props.aboutMe.name}
                            </h4>
                            <small>
                                <cite title="San Francisco, USA">
                                    {this.props.aboutMe.location }
                                </cite>
                            </small>
                            <br/>
                            <p>
                                Email: kmsohelinfo@gmail.com
                                <br />
                                Blog:
                                <a href={this.props.aboutMe.blog}>
                                    {this.props.aboutMe.blog}
                                </a>
                                <br />
                                Created At: { year + '-' + month + '-' + day }
                            </p>
                            <div className="btn-group">
                                <ul className="list-inline">
                                    <li><a href="https://twitter.com/minhaj_cse">Twitter</a></li>
                                    <li><a href="https://www.facebook.com/minhajul.islamsohel">Facebook</a></li>
                                    <li><a href="https://github.com/minhajCSE">Github</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;