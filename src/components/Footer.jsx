import PropTypes from 'prop-types';
export const Footer = ({totalCompleted, totalTask}) => {

    const message = () => {
        if (totalCompleted === 0 && totalTask === 0) {
            return <code>Vous n&apos;avez aucune tâche sur RTaskFlow</code>;
        }
        if (totalCompleted ===  totalTask) {
            return <code className='text-green-500'>🎉 Bravo, vous avez complété toutes vos tâches sur RTaskFlow</code>;
        }
        if (totalCompleted ===  1) {
            return <code>Vous avez terminé {totalCompleted} tâche sur RTaskFlow</code>;
        }
        return <code>Vous avez terminé {totalCompleted} tâches sur RTaskFlow</code>;
    }
    return (
        <footer className="flex flex-row justify-center text-white">
            {message()}
        </footer>
    )
}


Footer.propTypes = {
    totalCompleted: PropTypes.number.isRequired,
    totalTask: PropTypes.number.isRequired,
};