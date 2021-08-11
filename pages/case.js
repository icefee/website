import { BasePage } from './_app';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Case() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <BasePage className="products" title="产品与解决方案">
            <div className="banner">
                <Image width="1920" height="400" alt="banner" src="/banner_products.jpg" />
            </div>
            <div className="content-inner">
                案例 {id}
            </div>
        </BasePage>
    )
}
