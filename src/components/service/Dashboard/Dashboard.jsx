import React from "react";
import '../../service/service.css'
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import { getSummary } from "../../../globalState/dashboard/actionDashboard";
import ValueBox from "../ValueBox/ValueBox";
import { useEffect } from "react";
import ContentHeader from "../ContentHeader";
import ContentBox from "../ContentBox";

const Dashboard = props => {
    const { credits, debts } = props.summary
    const { email, token } = props.user
    useEffect(() => { props.getSummary(email, token) }, [])
    return (
        <div className="service-container">
            <ContentHeader title='Dahsboard' subtitle='2.0' />
            <ContentBox css={``} >
                <ValueBox
                    value={credits}
                    valueDescription='Total de Créditos'
                    backgroundColor='#2bd073'
                    icon="https://img.icons8.com/external-solidglyph-m-oki-orlando/32/000000/external-Parthenon-landmark-solidglyph-m-oki-orlando.png"
                ></ValueBox>
                <ValueBox
                    value={debts}
                    valueDescription='Total de Debitos'
                    backgroundColor='#eba467'
                    icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA3klEQVRoge2YQQrCMBBFX8WleDHbU1m8lfYAehrTfV1ooZUJtlbJGP+DDyWr/5gkhYAQQgghTCqgAVqgc5YWOAHlK4mDg7JTU8ckKgfl5sacTOOg2Nwc+/LFQCQAG8vQMQHYwlikS9NlMQXAKnWLT7E21gpjzSOjHZTNRCTijWxErMP+k9dwNhPJRsTaWhZL/y1f365/NxH3F0A2E5GINyTiDYl4QyLeGIq0yVq8z7X/GIqcExRZysVaLEn/cjg3u5hh7aDc1OxjEj0l9zfV4KDsc8KjW3QSQgghxF9zAyCnNlXJ8y95AAAAAElFTkSuQmCC"
                ></ValueBox>
                <ValueBox
                    value={credits - debts}
                    valueDescription='Valor Consolidado'
                    backgroundColor='#36678b'
                    icon="https://img.icons8.com/ios-filled/50/000000/receive-change.png"
                ></ValueBox>
            </ContentBox>
        </div>
    )
}

const mapStateToProps = (state) => ({
    summary: state.dashboard.summary,
    user: state.auth.user,
})
const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)