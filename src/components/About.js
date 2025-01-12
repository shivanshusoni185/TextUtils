import React from 'react'

export default function About() {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">About TextUtils</h2>
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Text Manipulation Made Easy</h5>
                            <p className="card-text">
                                TextUtils is a word counter and character counting utility which can be 
                                used to manipulate your text in the way you want. You can:
                            </p>
                            <ul>
                                <li>Convert text to uppercase or lowercase</li>
                                <li>Count words and characters</li>
                                <li>Calculate reading time</li>
                                <li>Remove extra spaces</li>
                            </ul>
                            <hr/>
                            <div className="text-muted">
                                <p>Version: 1.0.0</p>
                                <p>Created with React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}