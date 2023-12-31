import React from 'react'
import PropTypes from 'prop-types'
import '../AdminComp/admin.css'
import { Button, Result } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

function Thanks({u_id,s_id}) {
    const {id = s_id, uid = u_id} = useParams()
    const  navigate = useNavigate()

    const reloadForm = () => {
        navigate(`/user/${id}/${uid}`)
    }
    return (
        <div className='thank-you'>
            <Result
                status="success"
                title="Your Response Is Successfully Registered!"
                subTitle="If you want to create survey like this go to surveyAgency.com"
                extra={[
                    <Button key="buy" onClick={reloadForm} >Reload</Button>,
                ]}
            />
        </div>
    )
}

Thanks.propTypes = {

}

export default Thanks

