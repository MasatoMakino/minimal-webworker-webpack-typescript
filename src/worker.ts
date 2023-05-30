onmessage = ( e) => {
    console.log( "on message in worker : ", e.data );
    postMessage( "hello from worker" );
}