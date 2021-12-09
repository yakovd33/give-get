import { React, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthHelper from '../../helpers/AuthHelper';

const meet = () => {
    const router = useRouter();
    const { id } = router.query;
    const [ user, setUser ] = useState(AuthHelper.getUser() );

    if (user) {
    return (
        <div>
            { user.type == 'getter' && 'getter' }
        </div>                  
    )
    }
}

export default meet
