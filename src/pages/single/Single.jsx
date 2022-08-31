import React from 'react';
import './single.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                className="itemImg"
                                src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/299266915_605665224280745_2375433176312614766_n.jpg?stp=cp1_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yy_WewGrUhAAX_9vgAo&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT_45JlWH7bcBZeLbeAgw3-VZePua3OAw71qj2OQ6XydTQ&oe=6311578E"
                                alt=""
                            />
                            <div className="details">
                                <h1 className="itemTitle">Huy Nguyen</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">huy@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone:</span>
                                    <span className="itemValue">+84 981234596</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Address:</span>
                                    <span className="itemValue">Tan Phu district, Dong Nai province</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Vietnam</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={ 3 / 1 } title="User Spending (Last 6 months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;