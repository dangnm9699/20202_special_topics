import React from 'react';
import { Link } from 'react-router-dom'


class InHouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Nguyễn Thế Đức',
            resid: '1234567',
            folio: '1234567',
            nightStay: 1,
            arrivingAt: new Date(),
            leavingAt: new Date(),
            adult: 2,
            children: 2,
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props)
        let totalChildCount = (room) => {
            let total = 0;
            for (let i = 0; i < room.length; i++) {
                total += room[i].numChild
            }
            return total
        }
        let totalAdultCount = (room) => {
            let total = 0;
            for (let i = 0; i < room.length; i++) {
                total += room[i].numAdult
            }
            return total
        }
        return {
            name: props.Khach.name,
            resid: props.Khach.Id,
            folio: props.order.Id,
            nightStay: props.order.numday,
            arrivingAt: new Date(props.order.checkinTime),
            leavingAt: new Date(props.order.checkoutTime),
            adult: totalAdultCount(props.rooms),
            children: totalChildCount(props.rooms)
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="row align-items-center justify-content-center h-50">
                        <div className="col-8  border text-center d-flex flex-column justify-content-center h-75">
                            {this.state.arrivingAt.getDate()}
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center h-50">
                        <div className="col-8  border text-center d-flex flex-column justify-content-center h-75">
                            {this.state.leavingAt.getDate()}
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row h4">
                        {this.state.name}
                    </div>
                    <div className="row">
                        <div className="col font-weight-bold">
                            <div> ResID</div>
                            <div>{this.state.resid}</div>
                        </div>
                        <div className="col font-weight-bold">
                            <div> Folio</div>
                            <div>{this.state.folio}</div>
                        </div>
                    </div>
                    <div className="row mt-1">
                        <div className="col">
                            <div>{this.state.nightStay} Night Stay</div>
                            <div>Arriving At {this.state.arrivingAt.getHours()}:{this.state.arrivingAt.getMinutes()}</div>
                        </div>
                        <div className="col">
                            <div>Adult: {this.state.adult}</div>
                            <div>Child: {this.state.children}</div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center mt-3">
                            <div className="h4">
                                Status: Arrived
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-4">
                        <Link to={{
                            pathname: '/inhousedetail/' + this.props.order.Id,
                            state: { from: this.props.from }
                        }}>Click for more detail</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default InHouse