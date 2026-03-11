type LayoutProps = {
  children: React.ReactNode;
  grid?: boolean;
};

const Layout = ({ children, grid = false }: LayoutProps) => {
  return (
    <div className="parent_section">
      <div className="parent">
        {grid ? <div className="grid">{children}</div> : children}
      </div>
    </div>
  );
};

export default Layout;
