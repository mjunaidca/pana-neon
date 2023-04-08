import Link from "next/link";
import React from "react";

const IconText = ({ link, Icon }: { link: string; Icon: any }) => {
  return (
    <div>
      <Link href={link}>
        <Icon />
      </Link>
    </div>
  );
};

export default IconText;
