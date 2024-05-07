import * as m from "./RollingDetail.styled";

interface MessageCardProps {
  nickname: string;
  content: string;
  $bgImage?: string;
  $bgColor?: string;
  $font?: string;
  $fontColor?: string;
}

const index = ({
  nickname,
  content,
  $bgImage,
  $bgColor,
  $font,
  $fontColor,
}: MessageCardProps) => {

  return (
    <>
      <m.Container>
        <m.MessageBox
          $bgImage={$bgImage}
          $bgColor={$bgColor}
          $fontColor={$fontColor}
          $font={$font}
        >
          {content}
          <m.Nickname>From. {nickname}</m.Nickname>
        </m.MessageBox>
      </m.Container>
    </>
  );
};

export default index;