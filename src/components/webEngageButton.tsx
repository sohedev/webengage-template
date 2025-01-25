"use client"

const webEngageButton = () => {

    const webengageHandler = () => {
        window._weq('track', 'Event Name', {
            key1: 'value1',
            key2: 'value2',
        });

        // Set user attributes
        window._weq('user.setAttribute', 'name', 'John Doe');
        window._weq('user.setAttribute', 'email', 'john.doe@example.com');
    }

    return (
        <button
            className="bg-blue-500 w-56 text-center flex justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800 transition duration-150 ease-in-out"
            onClick={webengageHandler}>webEngageButton</button>
    )
}

export default webEngageButton