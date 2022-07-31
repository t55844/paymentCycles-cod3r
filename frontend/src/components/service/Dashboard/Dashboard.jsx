import React from "react";
import '../../service/service.css'

import ValueBox from "../ValueBox/ValueBox";
import { connect } from 'react-redux'

const Dashboard = props => {
    const { credit, debt } = props.sumary
    return (
        <div className="service-container">
            <div className="title-container">
                <h2 >Dahsboard</h2>
                <h3 >Version 1.0</h3>
            </div>
            <div className="service-content">
                <ValueBox
                    value={credit}
                    valueDescription='Total de Créditos'
                    backgroundColor='#2bd073'
                    icon="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/000000/external-Parthenon-landmark-solidglyph-m-oki-orlando.png"
                ></ValueBox>
                <ValueBox
                    value={debt}
                    valueDescription='Total de Debitos'
                    backgroundColor='#eba467'
                    icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA3klEQVRoge2YQQrCMBBFX8WleDHbU1m8lfYAehrTfV1ooZUJtlbJGP+DDyWr/5gkhYAQQgghTCqgAVqgc5YWOAHlK4mDg7JTU8ckKgfl5sacTOOg2Nwc+/LFQCQAG8vQMQHYwlikS9NlMQXAKnWLT7E21gpjzSOjHZTNRCTijWxErMP+k9dwNhPJRsTaWhZL/y1f365/NxH3F0A2E5GINyTiDYl4QyLeGIq0yVq8z7X/GIqcExRZysVaLEn/cjg3u5hh7aDc1OxjEj0l9zfV4KDsc8KjW3QSQgghxF9zAyCnNlXJ8y95AAAAAElFTkSuQmCC"
                ></ValueBox>
                <ValueBox
                    value={credit - debt}
                    valueDescription='Valor Consolidado'
                    backgroundColor='#36678b'
                    icon="https://img.icons8.com/ios-filled/50/000000/receive-change.png"
                ></ValueBox>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ sumary: state.dashboard.summary })

export default connect(mapStateToProps)(Dashboard)