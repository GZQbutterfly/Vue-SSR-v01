
import './app/app'


if (process.env.NODE_ENV == 'development') {
    console.log('development')
} else if (process.env.NODE_ENV == 'production') {
    console.log('production');
}else{
    console.log('do not know env');
}