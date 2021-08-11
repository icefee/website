import { BasePage } from './_app';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function News() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <BasePage className="news" title="新闻">
            <div className="banner">
                <Image width="1920" height="400" alt="banner" src="/banner_contact.jpg" />
            </div>
            <div className="content-inner">
                新闻 { id }
            </div>
        </BasePage>
    )
}
