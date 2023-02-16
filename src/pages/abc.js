import React from 'react';

const abc = ({a}) => {
    console.log('a', a.host);
    return (
        <>
            asdasd
        </>
    );
};

export async function getServerSideProps(context) {
    console.log(context.req.rawHeaders[1])
    const a = { host: context.req.rawHeaders[1], }
    return {
      props: { a },
    }
  }

export default abc;