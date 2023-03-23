import GridContent from '../../components/GridContent';

const PageNotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Página não encontrada.</p><a href="/">Clique para voltar</a>'
    />
  );
};

export default PageNotFound;
