import GridContent from '../../components/GridContent';

const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Página não encontrada. <a href="/">Clique para voltar</a></p> '
    />
  );
};

export default PageNotFound;
