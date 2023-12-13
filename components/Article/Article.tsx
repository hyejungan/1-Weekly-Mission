import { useEffect, useState } from 'react';
import { Search, CardContainer, FolderArticle } from '@/components';
import * as Style from './Article.style';

interface ArticleProps {
  links: Link[];
  folders?: Folders;
}

export default function Article({ links, folders }: ArticleProps) {
  const [checkItem, setCheckItem] = useState<Link[]>(links);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const handleSearch = (value: string) => {
    setValue(value);
  };

  useEffect(() => {
    setCheckItem(links);
  }, [links]);

  useEffect(() => {
    if (checkItem) {
      setIsVisible(checkItem.length !== 0);
    }
  }, [checkItem]);

  return (
    <Style.ArticleContainer>
      <Style.ArticleSection>
        <Search
          links={links}
          setCheckItem={setCheckItem}
          onSearch={handleSearch}
          value={value}
        />
        {value && (
          <Style.Paragraph>
            <Style.Keyword>{value}</Style.Keyword>으로 검색한 결과입니다.
          </Style.Paragraph>
        )}
        {!folders && <CardContainer items={checkItem} />}
        {folders && (
          <FolderArticle
            isVisible={isVisible}
            items={checkItem}
            folders={folders}
          />
        )}
      </Style.ArticleSection>
    </Style.ArticleContainer>
  );
}
