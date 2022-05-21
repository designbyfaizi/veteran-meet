const CompanyName = () => {
    return(
        <div className="companyName flex gap-2 items-center">
            <img src="/img/layouts/CommunityLayout/companyDefaultIcon.svg" alt="Community" className="companyImage w-[40px] rounded-full" />
            <h3 className="font-normal text-[16px]">Community Name</h3>
        </div>
    );
}

export default CompanyName;