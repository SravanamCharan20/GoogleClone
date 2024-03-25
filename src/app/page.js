'use client'
import HomeHeader from '@/components/HomeHeader';
import HomeSearch from '@/components/HomeSearch';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleSearch = (searchTerm) => {
    router.push(`/search/web?searchTerm=${searchTerm}`);
  };
  return (
    <>
      <HomeHeader />
      <div className='flex flex-col items-center mt-24'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
          alt='Google Logo'
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
        />
        <HomeSearch onSearch={handleSearch}></HomeSearch>
      </div>
    </>
  );
}