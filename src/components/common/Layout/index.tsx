import Search from "../Search";
type LayoutProps = {
  search?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  grid?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children, grid = false, search, onChange }: LayoutProps) => {
  return (
    <div>
      <div className="parent_section">
        <div className="parent">
          <Search search={search || ""} onChange={onChange} />
          {grid ? <div className="grid">{children}</div> : children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
