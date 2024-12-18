import { Script } from 'next/script'

export default function NewWidget() {
    return (
        <>
            <div
                id="getWaitlistContainer"
                data-waitlist_id="23171"
                data-widget_type="WIDGET_1"
            ></div>
            <link
                rel="stylesheet"
                type="text/css"
                href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
            />
            <Script
                src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
                strategy="lazyOnload"
            />
        </>
    );
} 