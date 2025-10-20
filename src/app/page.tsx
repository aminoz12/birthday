'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Heart, Star } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  answer: string;
  hint?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Ashnou Kayee3jbnii Fiiik ?",
    answer: "koulchi"
  },
  {
    id: 2,
    question: "Ashmen Color Kent Labs Ana awel nhar tla9ina ?",
    answer: "black"
  },
  {
    id: 3,
    question: "Emmm ou ashmen Color knti sabgha dfareek",
    answer: "hta wahd"
  },
  {
    id: 4,
    question: "Achnou Akter Haja Kanbghi nakeelha kateejbni naklhaa ?",
    answer: "ana"
  }
];

export default function QuizGate() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const router = useRouter();

  const handleSubmit = () => {
    const correctAnswers = ['koulchi', 'koulshi', 'koulch', 'koulsh', 'black', 'khel', 'k7el', 'hta wahd', 'hta sbagha', 'me', 'ana'];
    const correct = correctAnswers.includes(userAnswer.toLowerCase().trim());
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setWrongAnswers(0); // Reset wrong answers counter
      if (currentQuestion < questions.length - 1) {
        setTimeout(() => {
          setCurrentQuestion(prev => prev + 1);
          setUserAnswer('');
          setShowFeedback(false);
        }, 2000);
      } else {
        setTimeout(() => {
          router.push('/story');
        }, 2000);
      }
    } else {
      setWrongAnswers(prev => prev + 1);
      setTimeout(() => {
        setShowFailMessage(true);
        setTimeout(() => {
          setShowFailMessage(false);
          setUserAnswer('');
          setShowFeedback(false);
        }, 3000);
      }, 1000);
    }
  };

  const currentQ = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">
      
      <motion.div
        className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full relative z-20"
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-8">
          <motion.div
            className="text-4xl md:text-6xl mb-4"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            💖
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
            Welcome to Smahane's Special Day
          </h1>
          <p className="text-gray-600 text-lg">
            Answer these questions to unlock your birthday surprise!
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex space-x-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index <= currentQuestion ? 'bg-pink-500' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <motion.div
              className="bg-gradient-to-r from-pink-500 to-purple-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 text-center">
            {currentQ.question}
          </h2>
          
          <div className="space-y-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full p-4 border-2 border-pink-200 rounded-xl focus:border-pink-400 focus:outline-none transition-colors text-lg"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            />
            
            
            <motion.button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Answer
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {showFeedback && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 text-center max-w-md mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                {isCorrect ? (
                  <div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl mb-4"
                    >
                      ❤️
                    </motion.div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">Yesss bravo kity kity</h3>
                    <p className="text-gray-600">You know me so well! 💕</p>
                  </div>
                ) : (
                  <div>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl mb-4"
                    >
                      💔
                    </motion.div>
                    <h3 className="text-2xl font-bold text-red-500 mb-2">
                      {wrongAnswers === 1 ? "waaaaaaaaaaa fkri mziaan" : "ghalaaat antfkkkk"}
                    </h3>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFailMessage && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 text-center max-w-md mx-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
              >
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5, repeat: 2 }}
                  className="text-6xl mb-4"
                >
                  😢
                </motion.div>
                <h3 className="text-2xl font-bold text-red-500 mb-2">Try again, my love ❤️</h3>
                <p className="text-gray-600">Don't give up! You've got this! 💪</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}