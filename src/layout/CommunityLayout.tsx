import {FC} from "react";

interface CommunityLayoutProps {
    children: any
}


const CommunityLayout: FC<CommunityLayoutProps> = ({children}) => {
    return(
        <div>
            This is a community layout
            {children}
        </div>
    )
}

export default CommunityLayout;