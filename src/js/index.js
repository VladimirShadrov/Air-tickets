import '../styles/styles.scss';
import '../styles/filters.scss';
import '../styles/ticket.scss';


// Перенос изображений и шрифтов в папку "dist"
require.context('../images', true, /\.(png|jpg|svg|gif)$/);
