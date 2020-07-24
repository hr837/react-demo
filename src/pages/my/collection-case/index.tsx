import React from "react";
import { Link } from "react-router-dom";

export default function CollectionCase() {
  return (
    <div>
      <Link to="/workspace/collection/case-manage/await-distribution">
        没有案件，去待分配找找吧...
      </Link>
    </div>
  );
}
